'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import { useAppDispatch } from "@/store/store"
import styles from './form.module.css'
import { addDot, deleteDots } from "@/store/features/dotsSlice"

type Inputs = {
  height: number
  width: number
  length: number
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post('/api/getDots', {
        height: Number(data.height),
        width: Number(data.width),
        length: Number(data.length),
      });
      dispatch(deleteDots())
      const dots = response.data.triangles
      dots.map((dot: any) => {
        dispatch(addDot(dot))
      })
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formTextSize}>
        <h3  className={styles.textSize}>Height</h3>
        <div className={styles.formTextInputBlock}>
          <input type="number" {...register("height", { required: true })} />
          {errors.height && <span className={styles.errorText}>This field is required</span>}
        </div>
      </div>

      <div className={styles.formTextSize}>
        <h3  className={styles.textSize}>Width</h3>
        <div className={styles.formTextInputBlock}>
          <input type="number" {...register("width", { required: true })} />
          {errors.width && <span className={styles.errorText}>This field is required</span>}
        </div>
      </div>

      <div className={styles.formTextSize}>
        <h3 className={styles.textSize}>Length</h3>
        <div className={styles.formTextInputBlock}>
          <input type="number" {...register("length", { required: true })} />
          {errors.length && <span className={styles.errorText}>This field is required</span>}
        </div>
      </div>
      <div className={styles.buttonBlock}>
        <input type="submit" defaultValue="calculate"/>
      </div>    
</form>
  )
}