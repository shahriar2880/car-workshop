export const getServices = async () =>{
    const res = await fetch('http://localhost:3000/Services/api/get-all')
    const services = res.json()
    return services;
  }