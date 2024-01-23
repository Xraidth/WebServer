import { Type } from "@sinclair/typebox";

export const idDTOSchema = Type.String({
    format:'uuid', 
    errorMessage:{
        type:'El tipo de _id no es válido, debe ser un string',
        format:'El formato de _id no es valido, debe ser un uuid4',
    }
});

export const nameDTOSchema = Type.String({
    minLength:2,
    maxLength:20,
    errorMessage:{
        minLength:'El nombre debe tener al menos 2 caracteres de longitud',
        maxLength:'El nombre debe tener como maximo 20 caracteres de longitud',
        type:'El tipo de _id no es válido, debe ser un string',
        format:'El formato de _id no es valido, debe ser un uuid4',
    }
});

export const surnameDTOSchema = Type.String({
    minLength:4,
    maxLength:50,
    errorMessage:{
        minLength:'El surname debe tener al menos 4 caracteres de longitud',
        maxLength:'El surname debe tener como maximo 50 caracteres de longitud',
        type:'El tipo de surname no es válido, debe ser un string',
        format:'El formato de surname no es valido, debe ser un uuid4',
    }
});

export const emailDTOSchema = Type.String({
    format:'email', 
    errorMessage:{
        type:'El tipo del email no es válido, debe ser un string',
        format:'El formato del email no es válido, debe cumplir el RFC 5322',
    }
});
export const passwordDTOSchema = Type.String({
    minLength:10,
    maxLength:25,
    format:'password', 
    errorMessage:{
        minLength:'La password debe tener al menos 10 caracteres de longitud',
        maxLength:'La password debe tener como maximo 25 caracteres de longitud',
        type:'El tipo de la password no es válido, debe ser un string',
        format:'El formato de la password no es válido, debe contener mayúscula, una minúscula',
    }
});