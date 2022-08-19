import Joi from "joi";

export interface BaseBook {
  Author: string;
  Title: string;
  Pages: number;
  Description: string;
  Image: string;
}

export interface Book extends BaseBook {
  id: number;
}

export const bookSchema = Joi.object<BaseBook, true>({
  Author: Joi.string().required(),
  Title: Joi.string().required(),
  Pages: Joi.number().required(),
  Description: Joi.string().required(),
  Image: Joi.string().required(),
});
