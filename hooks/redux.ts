import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState, TypedDispatch} from 'store/model';

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
