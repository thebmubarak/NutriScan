// ============================================
// NAVIGATION SYSTEM
// ============================================

const navItems =
    document.querySelectorAll(".nav-item");

const pages =
    document.querySelectorAll(".page-section");


// ============================================
// HANDLE NAVIGATION
// ============================================

navItems.forEach((item)=>{

    item.addEventListener("click", ()=>{

        // REMOVE ACTIVE NAV
        navItems.forEach((nav)=>{

            nav.classList.remove(
                "active-nav"
            );

        });

        // HIDE ALL PAGES
        pages.forEach((page)=>{

            page.classList.remove(
                "active-page"
            );

        });

        // ACTIVATE CURRENT NAV
        item.classList.add(
            "active-nav"
        );

        // GET TARGET PAGE
        const pageId =
            item.dataset.page;

        // SHOW TARGET PAGE
        document.getElementById(pageId)
            .classList.add(
                "active-page"
            );

    });

});