const { fetchData } = require('./http');
//import axios from 'axios';
// unit testing example

const fullname =(firstName,lastName)=>{
    return `welcome ${firstName} ${lastName}`
}

const loadTitle = () => {
    return fetchData().then(extractedData => {
      const title = extractedData.title;
      const transformedTitle = title.toUpperCase();
      return transformedTitle;
    });
  };
  
  const printTitle = () => {
    loadTitle().then(title => {
      return title;
    });
  };
  exports.fullname = fullname
  exports.loadTitle = loadTitle
  exports.printTitle = printTitle
