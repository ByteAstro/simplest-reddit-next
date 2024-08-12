import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from '@nextui-org/react';
import HeaderAuth from './header-auth';

export default function Header() {
  return (
    <Navbar className="shadow mb-6 p-3">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Community
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder='Search topic ...' />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
