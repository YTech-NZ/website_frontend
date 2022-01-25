import React, { useState } from 'react';
import phLogo from '../assets/logo.png'
import '../styles/header.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    let body = document.querySelector("body");

    if (!isMenuOpen){
      //menu open so don't scroll
      body?.classList.add('no-scroll');
    } else {
      body?.classList.remove('no-scroll');
    }
    setIsMenuOpen(!isMenuOpen)
  }

  const fetchMenuClass = () => {
    return isMenuOpen ? "open" : ""
  }

  const handleFades = () => {
    return isMenuOpen ? "fade-in" : "fade-out"
  }

  return (
    <>
      <header className={`header ${fetchMenuClass()}`}>
        <div className={`overlay ${handleFades()} has-fade`}></div>
        <nav className='flex flex-jc-sb flex-ai-c container'>
          <a href="/" className='header__logo'>
            <img src={phLogo} alt="logo" />
          </a>
          <a href="/" className='header__toggle hide-for-desktop' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="header__links hide-for-mobile">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
            <a href="/">Careers</a>
          </div>
          <a href="/" className="button header__cta hide-for-mobile">
            CTA button
          </a>
        </nav>
        <div className={`header__menu ${handleFades()} has-fade`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>
      </header>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint. Reiciendis odio maxime perspiciatis impedit, repellat mollitia ut cum, eveniet nostrum natus ducimus sed in quod eum similique voluptas dolorem atque labore non, inventore quo eligendi corporis? Inventore unde obcaecati repellendus eum eveniet, nobis, porro accusantium sunt iure voluptate natus minima? Eius saepe est expedita eligendi error, fuga sapiente possimus, neque, itaque ex omnis. Maiores modi, excepturi vel dolor reiciendis repellendus minima repellat unde veniam libero quod aspernatur praesentium accusamus eum vitae nesciunt? Sed corporis ipsum soluta accusamus tenetur totam magni iste earum aspernatur, quis rerum fugiat voluptatibus praesentium atque, repudiandae officia aliquam nulla doloremque ea placeat ex, nobis facilis ducimus. Rem eligendi ad incidunt, quam autem accusamus? Delectus suscipit quis velit? Placeat dignissimos vero odit. Voluptate magni placeat facere reprehenderit alias id quas omnis sit officiis, obcaecati hic debitis porro quaerat ut, laborum eius. Consequatur quidem labore necessitatibus optio eum nemo rerum quia, blanditiis neque, deleniti facilis maxime quisquam nesciunt non ullam laborum error? Minus, eveniet? Similique, optio itaque sed eius, totam recusandae assumenda minus odio voluptas nostrum, ut magni suscipit doloremque. Explicabo quis tempora quam eum praesentium? Perferendis officiis alias quos adipisci quia harum, enim eaque error aspernatur. Eaque corrupti minus amet, iusto nobis delectus dolore natus aut nihil nulla error molestiae veritatis nisi cum quia veniam consequuntur vero harum. Laborum deleniti optio facere praesentium consequuntur ratione voluptates reiciendis soluta delectus nostrum nesciunt cupiditate error, rerum exercitationem dignissimos sed ad atque vel doloremque quam quo autem sunt? Magni impedit saepe reiciendis quas esse perferendis, delectus tempora aliquid error consequuntur pariatur ea amet vero aliquam soluta iure dignissimos a facilis neque aut minus. Nemo ducimus cupiditate consequatur in laborum cumque quod, accusamus ipsam necessitatibus incidunt iste delectus eveniet ullam libero mollitia. Autem hic qui ullam quasi earum? Molestias aliquid veritatis perferendis reprehenderit earum placeat expedita ea asperiores illum aspernatur beatae, quod at odit rerum ipsum assumenda numquam. Iste dolorum molestias, nisi eligendi itaque autem ad pariatur illo. Necessitatibus numquam deleniti dolor mollitia eveniet, expedita earum inventore dolorem nesciunt maiores, illo accusantium voluptas voluptatem vero quidem in maxime animi delectus, consequatur iusto. Et nobis debitis, quia laborum neque quam magnam sed voluptatum ratione aut consectetur necessitatibus voluptatem voluptates nihil quas voluptas. Tenetur eos ea libero corporis culpa non unde fuga doloribus autem aperiam aspernatur ex quisquam, iure corrupti! Accusantium eligendi voluptate quisquam fugit nisi culpa, recusandae temporibus iste. Quasi quisquam, quis voluptatem dignissimos veritatis corporis? Aperiam impedit soluta aliquid nam vel corporis reiciendis fuga quod a, voluptatum architecto iste deleniti doloribus consequuntur optio error repudiandae atque nobis obcaecati at quidem cumque excepturi nesciunt? Molestias praesentium minus inventore nihil explicabo assumenda incidunt quis aspernatur totam laboriosam? Corporis maiores dolorem nostrum, eaque facilis exercitationem, autem neque architecto magni aspernatur nulla dolor error. Natus quas cupiditate, dignissimos laudantium deleniti suscipit hic mollitia labore corrupti modi aperiam fugit debitis explicabo, perferendis totam. Reiciendis vitae commodi nemo eum laboriosam libero dolor nisi. Veritatis beatae repellendus, distinctio sed commodi hic? Voluptatibus ratione delectus dolores fugiat animi!
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam assumenda dolor fuga doloribus dignissimos quisquam officia aliquam repudiandae! Repudiandae dolore vel facilis. Nulla, numquam? Sint non, tempore sunt soluta corrupti repellat quibusdam dolores nemo dolor assumenda accusantium cum facere eos tenetur ea officia iure, eligendi beatae consectetur ducimus omnis velit. Mollitia voluptatum sequi aliquid, neque ad atque adipisci sit voluptatibus vero! Incidunt exercitationem inventore nostrum maiores fugiat sequi repellendus maxime! Beatae, et? Incidunt odio fugit laudantium beatae, nesciunt explicabo dolorem voluptates ratione! Ut voluptatum repellendus magni amet debitis est enim fuga sed, provident minus impedit cupiditate quae temporibus? Quam.
    </>
  );
}

export default Header;
