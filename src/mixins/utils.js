// 共通関数など
export default {
    methods: {
        // クッキーに格納した値の取得
        getCookie: function(name) {
            var result = null;

            var cookieName = name + '=';
            var allcookies = document.cookie;
    
            var position = allcookies.indexOf( cookieName );
            if( position != -1 )
            {
                var startIndex = position + cookieName.length;
    
                var endIndex = allcookies.indexOf( ';', startIndex );
                if( endIndex == -1 )
                {
                    endIndex = allcookies.length;
                }
    
                result = decodeURIComponent( allcookies.substring( startIndex, endIndex ) );
            }
    
            return result;
        }
    }
}
