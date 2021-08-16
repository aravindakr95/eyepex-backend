import { body, query, validationResult } from 'express-validator';

import loglevel from '../configs';

import HttpResponseType from '../models/http/http-response-type';

import dispatchResponse from '../helpers/http/response-dispatcher';
import { objectHandler } from '../helpers/utilities/request-handler';

function fieldStateChecker(req, res, next) {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    loglevel.info('[field-validator] Field errors not found, moving to next');
    return next();
  }

  const extractedErrors = [];
  errors.array().map((error) => extractedErrors.push(error.msg));

  const response = objectHandler({
    status: HttpResponseType.BAD_REQUEST,
    message: extractedErrors.join(', '),
  });

  return dispatchResponse(res, response);
}

function carouselValidator(route) {
  switch (route) {
    case '/':
      return [
        query('limit')
          .exists().withMessage('Limit query is required')
          .isNumeric()
          .withMessage('Limit query should be number'),
      ];
    case '/add':
      return [
        body('image')
          .exists().withMessage('Image body is required')
          .isString()
          .withMessage('Image body should be string'),
        body('title')
          .exists().withMessage('Title body is required')
          .isString()
          .withMessage('Title body should be string'),
        body('subTitle')
          .exists().withMessage('Sub title body is required')
          .isString()
          .withMessage('Sub title body should be string'),
      ];
    case '/health':
      return [];
    default:
      return [];
  }
}

const validate = (main, route) => {
  switch (main) {
    case 'carousel':
      return carouselValidator(route);
    default:
      return [];
  }
};

export { validate, fieldStateChecker };
