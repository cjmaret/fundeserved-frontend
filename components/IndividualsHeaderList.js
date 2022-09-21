// import Link from 'next/link';
// import { useContext, useState } from 'react';
// import {
//   IndividualsNavItem,
//   IndividualsList,
//   IndividualsListItem,
//   NavLink,
// } from './styles/styledHeader';
// import { MobileContext } from '../contexts/mobileContext';

// export default function IndividualsHeaderList({ isMenuOpen }) {
//   const mobileMenu = useContext(MobileContext);

//   const [individualsActive, setIndividualsActive] = useState(false);
//   function toggleIndividualsActive() {
//     return individualsActive
//       ? setIndividualsActive(false)
//       : setIndividualsActive(true);
//   }

//   console.log(individualsActive);

//   return (
//     <IndividualsNavItem
//       onMouseEnter={() => setIndividualsActive(true)}
//       onMouseLeave={() => setIndividualsActive(false)}
//       // onClick={() => toggleIndividualsActive()}
//       >
//       For individuals
//       <IndividualsList
//         mobileMenu={mobileMenu}
//         isMenuOpen={isMenuOpen}
//         individualsActive={individualsActive}>
//         <IndividualsListItem>
//           <Link href="/mario">
//             <NavLink>Colin</NavLink>
//           </Link>
//         </IndividualsListItem>
//         <IndividualsListItem>
//           <Link href="/mario">
//             <NavLink>Ryan</NavLink>
//           </Link>
//         </IndividualsListItem>
//         <IndividualsListItem>
//           <Link href="/mario">
//             <NavLink>Rachael</NavLink>
//           </Link>
//         </IndividualsListItem>
//         <IndividualsListItem>
//           <Link href="/mario">
//             <NavLink>Kate</NavLink>
//           </Link>
//         </IndividualsListItem>
//       </IndividualsList>
//     </IndividualsNavItem>
//   );
// }
