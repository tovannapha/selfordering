import { createError } from 'apollo-errors';
 
export const FooError = createError('FooError', {
  message: 'ທ່ານບໍ່ສາມາດເຂົ້າເຖິງຂໍ້ມູນນີ້'
});