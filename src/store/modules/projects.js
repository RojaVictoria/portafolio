import Firebase from "firebase"

export const projectsModule = {
    namespaced: true,
    state: {
        projects: [],
    },
    mutations: {
        GET_PROJECTS(state, projectsData) {
            state.projects = projectsData;
        },
    },
    actions: {
        getProjects(context) {
            Firebase.firestore()
                .collection('proyectos')
                .onSnapshot((documents) => {
                const projects = [];
                documents.forEach((document) => {
                    projects.push({id: document.id, ...document.data() });
                });
                context.commit('GET_PROJECTS', projects);
                });
        },
    },
};