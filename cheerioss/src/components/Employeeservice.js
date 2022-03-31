import http from "../components/http-comman";  
class EemployeeService {  
     
    getAll() {  
        return http.get("/api/EmployeeInfo/Getemployeeinfo");  
      }  
        
}  
export default new EemployeeService(); 