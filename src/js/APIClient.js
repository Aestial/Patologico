export default class APIClient {
  getRecord() {
    return APIClient.appRecord;
  }
}

APIClient.appRecord = {
  name: 'Patologico',
  elements: [{
    name: 'Character',
    pieces: [{
      name: 'Camisa',
      props: {

      }
    }, {
      name: 'Corbata',
      props: {

      }
    }],
    props: {
      svg: './svg/Patologico.svg'
    }
  }, {
    name: 'Menu',
    pieces: [{
      name: 'Camisa',
      props: {
        
      }
    },{

    }]
  }]
};
