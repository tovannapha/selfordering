import { createError } from 'apollo-errors';
 
export const Error1 = createError('FooError', {
  message: 'ທ່ານບໍ່ສາມາດເຂົ້າເຖິງຂໍ້ມູນນີ້'
});

export const Error2 = createError('Error2', {
  message: 'Error2'
});

export const Error3 = createError('Error3', {
  message: 'Error3'
});
