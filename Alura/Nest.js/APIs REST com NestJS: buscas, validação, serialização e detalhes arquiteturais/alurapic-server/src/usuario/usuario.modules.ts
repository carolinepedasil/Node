import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint]
})
export class UsuarioModule {}