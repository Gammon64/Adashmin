import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { Error as MongooseError } from 'mongoose';

@Catch(MongoError, MongooseError.ValidationError)
export class MongooseExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError | MongooseError.ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof MongoError) {
      status = HttpStatus.BAD_REQUEST;
      message = this.getMongoErrorMessage(exception);
    } else if (exception instanceof MongooseError.ValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = this.getValidationErrorMessage(exception);
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }

  private getMongoErrorMessage(exception: MongoError): string {
    switch (exception.code) {
      case 11000:
        return 'Duplicate key error';
      default:
        return 'Database error';
    }
  }

  private getValidationErrorMessage(exception: MongooseError.ValidationError): string {
    return Object.values(exception.errors).map(err => err.message).join(', ');
  }
}