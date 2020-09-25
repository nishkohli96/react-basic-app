export const query = `
query{
    person(id:"3eAIEmMPPkNCJF2Bv3kfvb"){
      name
      phoneno
      dob
    }
  }
`;

export const queryByID = (id) => {
    return `
query {
    person(id:${id}){
        name
        phoneno
        dob
    }
}
`;
};

/* sys.id gives the unique id for that document */
export const getAllPersons = `
query{
    personCollection{
        items{
            name
            imageUrl{
                url
            }
            phoneno
            dob
            sys{
                id
            }
        }
    }
  }
`;
