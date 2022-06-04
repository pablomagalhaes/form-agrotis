
import { TopHeader, Logo } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header(){
  return (
    <>
      <TopHeader>
        <Logo alt='Agrotis' src={logo} />
      </TopHeader>
    </>
  )
}