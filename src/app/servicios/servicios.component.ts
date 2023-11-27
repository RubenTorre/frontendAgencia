import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosComponent {

  readonly inspectionAPIUrl = "http://localhost/crudphppostgresql/";
  
  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {
    
    console.log(this.http.get<any>(this.inspectionAPIUrl + 'login.php'))
    return this.http.get<any>(this.inspectionAPIUrl + 'login.php');
  }

  loginuser(data:any) {
    return this.http.post(this.inspectionAPIUrl + 'login.php', data);
  }

  getAgenteList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + 'agente.php');
  }

  logout() {
    return this.http.post(this.inspectionAPIUrl + 'logout.php', {});

  }







  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Usuarios/${id}`, data);
  }

  deleteInspection(id:number|string) {
    
    //return this.http.delete(this.inspectionAPIUrl +'/Usuarios/'+ id);
    return  this.http.delete(this.inspectionAPIUrl+'/Usuarios/'+id)
  }

  // servicios rol

   getrollist():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Rols');
  }

  addInspectionr(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Rols', data);
  }

  updateInspectionr(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Rols/${id}`, data);
  }

  deleterol(id:number|string) {
    
    return  this.http.delete(this.inspectionAPIUrl+'/Rols/'+id)
    
  }

  // SERVICIOS APLICAION
  getAplicacionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Aplicacions');
  }

  addAplicacion(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Aplicacions', data);
  }

  updateAplicacion(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Aplicacions/${id}`, data);
  }

  deleteAplicacion(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Aplicacions/${id}`);
  }

  ///SERVICIOS USUARIO ROL
  getUsuRolList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Usuariorols');
  }
  addUsuRol(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Usuariorols', data);
  }

  updateUsuRol(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Usuariorols/${id}`, data);
  }

  deleteUsuRol(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Usuariorols/${id}`);
  }
  getUsuRolLista():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Usuariorols/lista');
  }
  ///SERVICIOS APLICACION ROL
  getApliRolList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Aplicacionrols');
  }
  addApliRol(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Aplicacionrols', data);
  }

  updateApliRol(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Aplicacionrols/${id}`, data);
  }

  deleteApliRol(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Aplicacionrols/${id}`);
  }
  getUsuRolListas():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Aplicacionrols/listas');
  }

}




