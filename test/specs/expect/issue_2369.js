// riot/riot#2369
riot.tag2('my-tag', '<h1>{getSpaceName(message)}</h1>', '', '', function(opts) {
    this.message = 'display/example/stuff'
    this.getSpaceNameForLink = function(link) {

        return link.match(/display\/(\w+)\//)[1]
    }
});
