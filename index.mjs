import {log} from  './log.mjs';
export const handler = async (event) => {
    // TODO implement


    log('Log de execução após GitHub Action, event: ' + JSON.stringify(event));

    return{
        statusCode: 200,
        body: JSON.stringify(event),
    };
  };
  