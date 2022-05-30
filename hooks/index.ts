// custom, AOP (전체 프로젝트의 공통 모듈)

import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux'

import type { AppState, AppDispatch } from '@/modules/store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector