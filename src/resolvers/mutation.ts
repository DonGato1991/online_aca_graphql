import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

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
        },
        modificarCurso(__: void, { curso }):any{
            const elementoRepetido = _.findIndex(database.cursos, function(o){
                return o.id === curso.id;
            });
            if (elementoRepetido>-1) {
                const valoraciones = database.cursos[elementoRepetido].reviews;
                curso.reviews = valoraciones;
                database.cursos[elementoRepetido] = curso;
                return curso;
            }
            return {
                id: "-1",
                title: `Curso con el ID ${curso.id} no existe`,
                description: '',
                clases: 0,
                time: 0.0,
                logo: '',
                level: 'ALL',
                path: '',
                teacher: '',
                reviews: []
            };
        },
        eliminarCurso(__: void, { id }):any{
            const eliminado = _.remove(database.cursos, function(curso){
                return curso.id === id;
            });
            if (eliminado[0]!== undefined) {
                return eliminado[0];
            }
            return {
                id: "-1",
                title: `Curso con el ID ${id} no existe`,
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