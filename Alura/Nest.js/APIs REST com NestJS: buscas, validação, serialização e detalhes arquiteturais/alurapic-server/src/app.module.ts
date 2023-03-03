import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.modules';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { filtroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: filtroDeExcecaoHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
