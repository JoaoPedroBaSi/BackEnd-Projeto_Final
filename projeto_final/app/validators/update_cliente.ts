import vine from '@vinejs/vine'

export const updateClienteValidator = vine.compile(
  // Valida os dados do cliente durante seu update, garantindo que estejam de acordo com o esperado na tabela,
  // além de alguns adicionais, como o CPF ter exatamente 11 caracteres e a senha ter entre 8 e 30 caracteres.
  // Os campos são opcionais, pois o cliente pode atualizar apenas alguns deles.
  vine.object({
    nome: vine.string().trim().minLength(10).maxLength(40).optional(),
    genero: vine.enum(['MASCULINO', 'FEMININO']).optional(),
    idade: vine.number().min(18).max(120).optional(),
    cpf: vine.string().trim().fixedLength(11).optional(),
    email: vine.string().trim().email().optional(),
    senha: vine.string().trim().minLength(8).maxLength(30).optional(),
  })
)
