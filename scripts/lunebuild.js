document.addEventListener('DOMContentLoaded', function () {
    // Charger les options des Pictos depuis pictos.html
    fetch('../tabs/pictos.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const pictos = Array.from(doc.querySelectorAll('.picto-name')).map(el => el.textContent);

            const datalistPictos = document.getElementById('pictos-list');
            pictos.forEach(picto => {
                const option = document.createElement('option');
                option.value = picto;
                datalistPictos.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des Pictos :', error));

    // Charger les options des Armes depuis lune.html
    fetch('../tabs/lune.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const weapons = Array.from(doc.querySelectorAll('.weapon-name')).map(el => el.textContent);

            const datalistWeapons = document.getElementById('weapons-list');
            weapons.forEach(weapon => {
                const option = document.createElement('option');
                option.value = weapon;
                datalistWeapons.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des Armes :', error));

    // Gestion de la soumission du formulaire
    document.getElementById('build-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Récupérer les données du formulaire
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const skills1 = document.getElementById('skills1').value;
        const skills2 = document.getElementById('skills2').value;
        const skills3 = document.getElementById('skills3').value;
        const weapons = document.getElementById('weapons').value;

        // Créer un objet pour le build
        const build = {
            name,
            description,
            skills: [skills1, skills2, skills3],
            weapons,
            category: 'Lune' // Catégorie spécifique pour Lune
        };

        // Récupérer les builds existants depuis localStorage
        const builds = JSON.parse(localStorage.getItem('builds')) || [];

        // Ajouter le nouveau build
        builds.push(build);

        // Enregistrer les builds mis à jour dans localStorage
        localStorage.setItem('builds', JSON.stringify(builds));

        // Réinitialiser le formulaire
        document.getElementById('build-form').reset();

        alert('Build enregistré avec succès dans la catégorie Lune !');
    });
});