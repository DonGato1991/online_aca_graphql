import { IResolvers } from 'graphql-tools';

const query: IResolvers ={
    Query:{
        estudiantes():String {
            return "Lista de estudiantes";
        }
    }
}

export default query;