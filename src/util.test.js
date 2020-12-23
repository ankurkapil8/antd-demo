 jest.mock('./http');
const {fullname, loadTitle, printTitle} =require("./util");

// unit testing example
test('fullname should be welcome ankur kapil', () => {
    expect(fullname("ankur","kapil")).toBe("welcome ankur kapil");
  });

  // async call example

  // test('api call name Leanne Graham', () => {
  //   expect(loadTitle()).toBe("DELECTUS AUT AUTEM");
  // });  

// async call example

test('should print an uppercase text', () => {
    return expect(loadTitle()).resolves.toBe('DELECTUS AUT AUTEM');    
  });
