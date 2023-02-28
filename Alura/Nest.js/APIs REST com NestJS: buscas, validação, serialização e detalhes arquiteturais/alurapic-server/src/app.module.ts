import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.modules';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
