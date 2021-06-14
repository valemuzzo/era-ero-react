function FormContacto(){
    return(
        
        <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre</label><br/>
                        <input type="email" className="campoFooter" id="nombre"/>
                        <br/>
                        <label for="exampleInputPassword1">Email</label><br/>
                        <input type="email" className="campoFooter" id="email"/>
                    </div>
                    <span className="boton-azul mt-2"><a href="#">Suscribirse</a></span>
                    </form>
        
    )
}
export default FormContacto;