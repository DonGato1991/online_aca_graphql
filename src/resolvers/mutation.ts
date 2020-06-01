import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

const mutation: IResolvers ={
    Mutation:{
        crearCurso(__: void, { curso }): any {
            const itemNuevo = {
                id: String(database.cursos.length + 1),
                title: curso.title,                
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                logo: curso.logo,
                level: curso.level,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            }
            if (database.cursos.filter(itemCur=>itemCur.title === itemNuevo.title).length ===0) {
                database.cursos.push(itemNuevo);
            return itemNuevo;
            }
            return {
                id: "-1",
                title: 'Curso ya se encuentra registrado',                
                description: '',
                clases: 0,
                time: 0.0,
                logo: '',
                level: 'ALL',
                path: '',
                teacher: '',
                reviews: []
            };
        }
    }
}

export default mutation;