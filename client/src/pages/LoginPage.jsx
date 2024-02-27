import { useForm } from "react-hook-form"

export default function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  // creacion de la funcion handle submit y sea mas limpio el codigo
  const onSubmited = handleSubmit(async(data) =>{
    console.log(data) ;

  })
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmited}>
        {/*  traemos el onSubmited que contiene el handlesubmit es cuando nosotros le damos click en submit(boton),
         ademas estamos indicando que el evento es asincrono ,envia unos valores 
        y con el console.log miramos que nos muestres en consola los datos */}
        <input type="text" {...register("username", { required: true })} placeholder='username'
          className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />{/* usamos el register para almacenar
        informacion y los elementos que le agregamos o necesitamos  */}
        {
          errors.username && <p className='text-red-500'>Username is required</p>
        }

        <input type="email" {...register("email", { required: true })} placeholder='email'
          className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

        {
          errors.email && <p className='text-red-500'>Email is required</p>
        }

        <input type="password" {...register("password", { required: true })} placeholder='password'
          className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />
        {
          errors.password && <p className='text-red-500'>Password is required</p>
        }


        <button type="submit" className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2
        px-4 rounded'>Registrer</button>
      </form>


    </div>
  )
}
