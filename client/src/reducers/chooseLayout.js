import { Layout1 } from '../statehandle/layout/Layout';
import { Layout2 } from '../statehandle/layout/Layout';
import { Layout3 } from '../statehandle/layout/Layout';
import { Layout4 } from '../statehandle/layout/Layout';

const counterRed = (state = [], action) => {
    switch (action.type) {
        case 'LAYOUT1':
            return  <Layout1/> ;
        case 'LAYOUT2':
            return <Layout2/> ;
        case 'LAYOUT3':
            return  <Layout3/> ;
        case 'LAYOUT4':
            return  <Layout4/> ;
        default: 
            return state;
    };
};

export default counterRed;
