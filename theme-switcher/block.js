( function( wp ) {
    var el = wp.element.createElement;

    wp.blocks.registerBlockType( 'grok/theme-switcher', {
        title: 'Theme Switcher',
        icon: 'lightbulb',
        category: 'design',
        edit: function() {
            return el( 'p', { className: 'ts-preview' }, 'Theme Switcher Preview (frontend only)' );
        },
        save: function() {
            return null; // dynamic block → null save
        },
    } );
} )( window.wp );
