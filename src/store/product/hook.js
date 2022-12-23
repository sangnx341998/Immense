import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './slice'

export const useGetProducts = () => {
  const dispatch = useDispatch()
  const { products, loading } = useSelector((state) => state.products)
  const onFetch = async () => {
    await dispatch(fetchProduct())
  }

  useEffect(() => {
    onFetch()
  }, [])

  return [loading, products]
}
