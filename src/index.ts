import { getUsers, createUser, updateUserPut, updateUserPatch, deleteUser } from './servicosrest';

async function main() {
  try {
    console.log('GET - Listar usuários:');
    const users = await getUsers();
    console.log(users);

    console.log('\nPOST - Criar usuário:');
    const newUser = await createUser({ name: 'Otavio', job: 'Developer' });
    console.log(newUser);

    console.log('\nPUT - Atualizar usuário:');
    const updatedUserPut = await updateUserPut(2, { name: 'Otavio', job: 'Senior Developer' });
    console.log(updatedUserPut);

    console.log('\nPATCH - Atualizar parcialmente usuário:');
    const updatedUserPatch = await updateUserPatch(2, { job: 'Lead Developer' });
    console.log(updatedUserPatch);

    console.log('\nDELETE - Deletar usuário:');
    const deleted = await deleteUser(2);
    console.log(deleted ? 'Usuário deletado com sucesso' : 'Falha ao deletar usuário');
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();