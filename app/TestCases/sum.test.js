import sum from "./sum";

it("addintion a & b is noumber",()=>{
    const result = sum(1,2);
    expect(result).toBe(3); 
})


it("addintion a & b is noumber is string",()=>{
    const result = sum("1",2);
    expect(result).toBe(3); 
})

it("addintion a & b is noumber is string",()=>{
    const result = sum("1","2");
    expect(result).toBe(3); 
})