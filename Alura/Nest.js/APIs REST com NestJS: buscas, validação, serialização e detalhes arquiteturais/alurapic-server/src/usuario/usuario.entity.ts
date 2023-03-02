import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {

    id: number;

    @IsNomeDeUsuarioUnico({ message: 'Nome de Usuário precisa ser único!' })
    @IsNotEmpty({ message: 'Nome de Usuário é obrigatório!' })
    @IsString({ message: 'Nome de Usuário precisa ser uma string!' })
    nomeDeUsuario: string;

    @IsEmail({}, { message: 'E-mail precisa ser um endereço de e-mail válido!' })
    email: string;

    @IsNotEmpty({ message: 'Senha é obrigatória!' })
    senha: string;

    @IsNotEmpty({ message: 'Nome Completo é obrigatório!' })
    nomeCompleto: string;

    dataDeEntrada: Date;
}