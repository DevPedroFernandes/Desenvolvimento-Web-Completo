const simpleGit = require('simple-git');
const git = simpleGit();

async function removeCommitsFrom2022Onwards() {
    try {
        // 1. Identificar o commit base antes de 2022
        const logs = await git.log();
        let commitBase = null;
        
        for (let commit of logs.all) {
            const commitDate = new Date(commit.date);
            if (commitDate.getFullYear() < 2022) {
                commitBase = commit.hash;
                break;
            }
        }

        if (!commitBase) {
            console.error('Não foi encontrado nenhum commit antes de 2022.');
            return;
        }

        // 2. Reset para o commit base
        console.log(`Resetando para o commit ${commitBase}`);
        await git.reset(['--hard', commitBase]);

        // 3. Push forçado para atualizar o repositório remoto
        console.log('Forçando o push para o repositório remoto');
        await git.push('origin', 'main', {'--force': null});

        console.log('Commits a partir de 2022 foram removidos com sucesso.');
    } catch (error) {
        console.error('Erro ao remover commits:', error);
    }
}

removeCommitsFrom2022Onwards();
