import alice from "./alice.html";
export class Literature {
    chapterRegEx = /\<div class="chapter"\>/i;
    chapters = this.chapterRegEx.exec(alice)||[];
    bookmark = {chapter: 0, sentence: 0};
    constructor() {
        const startPosition = Math.floor(Math.random()*this.chapters?.length);
        this.bookmark.chapter = startPosition;
    }
    /**
     * returns a sentence fitting the requested length
     * @param low minimum character length
     * @param high maximum character length
     */
    public sentence(low: number, high: number) {
        if (low <= 0 || low > high) {
            throw new Error(`Invalid parameter (${low}, ${high})`);
        }
        let retval = '';
        let sentenceArray = this.chapters[this.bookmark.chapter].split(/[\.\?\!\"]/);
        while (retval.length < low || retval.length > high) {
            retval = sentenceArray[this.bookmark.sentence];
            this.bookmark.sentence++;
            if (this.bookmark.sentence >= sentenceArray.length) {
                // next chapter
                this.bookmark.chapter++;
                this.bookmark.sentence = 0;
                if (this.bookmark.chapter >= this.chapters.length) {
                    this.bookmark.chapter = 0;
                }
                sentenceArray = this.chapters[this.bookmark.chapter].split(/[\.\?\!\"]/);
            }
        }
        return retval;
    }
}