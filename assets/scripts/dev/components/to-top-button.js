let toTopButton = {
    element: {},
    functions: {
        create: () => {

            let bottomStyle = toTopButton.functions.bottomStyleHandler();
            let rightStyle = toTopButton.functions.rightStyleHandler();

            let html = 
            `<div class="position-fixed d-none"
                id="to-top-btn" 
                style="z-index: 2000;
                    bottom: ${bottomStyle};
                    right: ${rightStyle};">
                <div class="d-flex">
                    <button class="btn btn-light"
                        type="button">
                        <i class="fas fa-chevron-up"></i>
                    </button>
                </div>
            </div>`;

            $('body').append(html);
            
            toTopButton.element = $(html);

        },
        bottomStyleHandler: () => {

            let navbarHeight = navbar.element.height();

            if (root.widthScreen < 768) {
                return `${navbarHeight + 20}px`;
            }

            if (root.widthScreen < 996) {
                return `${navbarHeight + 40}px`;
            }

            return '60px';

        },
        rightStyleHandler: () => {

            if (root.widthScreen < 768) {
                return '20px';
            }

            if (root.widthScreen < 996) {
                return '25px';
            }

            return '40px';

        }
    },
    events: () => {

    }
}