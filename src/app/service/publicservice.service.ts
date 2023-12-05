import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnswerFpkDto, AnswerQuestionDto, CommentPostDto, SubAnswerQuestionDto } from '../ObjectClass/object';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicserviceService {

  constructor(private http: HttpClient, private datePipe: DatePipe ,private authservice: AuthService) { }
  url = "http://localhost:4200/VietNamHistory_FEweb";
  apiurl = this.authservice.getApiUrl();
  
  CreatePost(data: FormData){
    return this.http.post(this.apiurl + '/Post', data);
  }
  CreateQuestion(data: FormData){
    return this.http.post(this.apiurl + '/Question', data);
  }
  CreatePostComment(data: CommentPostDto){
    return this.http.post(this.apiurl + '/Post/Chat', data);
  }
  CreateForumAnswer(data: AnswerQuestionDto){
    return this.http.post(this.apiurl + '/Answer', data);
  }
  CreateForumSubAnswer(data: SubAnswerQuestionDto){
    return this.http.post(this.apiurl + '/Answer/SubAnswer', data);
  }
  deleteComment(id: string){
    return this.http.delete(this.apiurl + '/Post/Chat?idComment=' + id);
  }
  deleteAnswer(idAnswer: string){
    return this.http.delete(this.apiurl + '/Answer/delete?idAnswer=' + idAnswer);
  }
  deleteSubAnswer(idAnswer: string){
    return this.http.delete(this.apiurl + '/Answer/DeleteSub?idSubAnswer=' + idAnswer);
  }
  getChatSignRl(): string{
    return this.apiurl + '/commentHub';
  }
  getCurrentDate(): string {
    const currentDate = new Date();
    return this.datePipe.transform(currentDate, 'dd/MM/yyyy') || '';
  }
  getLike(postId: string, userId: string) {
    const params = {
        PostId: postId,
        UserId: userId
    };
    return this.http.get(`${this.apiurl}/Post/Like`, { params });
  }
  getLikeQuestion(questionId: string, userId: string) {
    const params = {
      QuestionId: questionId,
      UserId: userId
    };
    return this.http.get(`${this.apiurl}/Question/Like`, { params });
  }
  GetMyPost(){
    return this.http.get(this.apiurl + '/Post/MyPost');
  }
  GetMyQuestion(){
    return this.http.get(this.apiurl + '/Question/MyQuestion');
  }
  GetMyPostSaved(){
    return this.http.get(this.apiurl + '/Post/MyPostSaved');
  }
  GetMyQuestionSaved(){
    return this.http.get(this.apiurl + '/Question/MyQuestionSaved');
  }
  GetNews(){
    return this.http.get(this.apiurl + '/News');
  }
  getpostbytag(tag: string){
    return this.http.get(this.apiurl + '/Post/FindByTag?tag=' + tag);
  }
  GetPostDetail(postId: string){
    return this.http.get(this.apiurl + '/Post/' + postId);
  }
  GetQuestionDetail(subId: string){
    return this.http.get(this.apiurl + '/Question/Detail?subId=' + subId);
  }
  GetAnswers(questionId: string){
    return this.http.get(this.apiurl + '/Answer?questionId=' + questionId);
  }
  getRandomPost(quantity: number){
    return this.http.get(this.apiurl + '/Post/RandomArticle?quantity=' + quantity);
  }
  GetTopTags(number: number){
    return this.http.get(this.apiurl + '/HashTag/TopTag?numberTag=' + number);
  }
  getUrl(): string{
    return this.url;
  }
  GetAllTag(){
    return this.http.get(this.apiurl + '/HashTag');
  }
  GetQuestionForYou(){
    return this.http.get(this.apiurl + '/Question');
  }
  getSave(postId: string, userId: string) {
    const params = {
        PostId: postId,
        UserId: userId
    };
    return this.http.get(`${this.apiurl}/Post/Save`, { params });
  }
  getSaveQuestion(questionId: string, userId: string) {
    const params = {
      QuestionId: questionId,
      UserId: userId
    };
    return this.http.get(`${this.apiurl}/Question/Save`, { params });
  }
  GetTopic(){
    return this.http.get(this.apiurl + "/Topic");
  }
  GetPost(){
    return this.http.get(this.apiurl + '/Post/Discover');
  }
  getPostComment(postId: any){
    return this.http.get(this.apiurl + '/Post/Chat?PostId=' + postId);
  }
  getReport(){
    return this.http.get(this.apiurl + '/Report');
  }
  LikeOrUnlike(data: FormData): Observable<any>{
    return this.http.post(`${this.apiurl}/Post/Like`, data);
  }
  LikeOrUnlikeQuestion(data: FormData): Observable<any>{
    return this.http.post(`${this.apiurl}/Question/Like`, data);
  }
  postSearch(keyWord: string){
    keyWord = encodeURIComponent(keyWord);
    return this.http.get(this.apiurl + '/Post/Search?keyWord=' + keyWord);
  }
  qusestionSearch(keyWord: string){
    keyWord = encodeURIComponent(keyWord);
    return this.http.get(this.apiurl + '/Question/Search?keyWord=' + keyWord);
  }
  ReportPost(data: any){
    return this.http.post(`${this.apiurl}/Post/Report`, data);
  }
  ReportQuestion(data: any){
    return this.http.post(`${this.apiurl}/Question/Report`, data);
  }
  SaveOrUnSave(data: FormData): Observable<any>{
    return this.http.post(`${this.apiurl}/Post/Save`, data);
  }
  SaveOrUnSaveQuestion(data: FormData): Observable<any>{
    return this.http.post(`${this.apiurl}/Question/Save`, data);
  }
  UpdatePost(data: FormData){
    return this.http.put(this.apiurl + '/Post', data);
  }
  UpdatePostComment(data: CommentPostDto){
    return this.http.put(this.apiurl + '/Post/Chat', data);
  }
  UpdateQuestion(data: FormData){
    return this.http.put(this.apiurl + '/Question', data);
  }
  UpdateForumAnswer(data: AnswerQuestionDto){
    return this.http.put(this.apiurl + '/Answer', data);
  }
  UpdateForumSubAnswer(data: SubAnswerQuestionDto){
    return this.http.put(this.apiurl + '/Answer/SubAnswer', data);
  }
  VoteAnswer(data: AnswerFpkDto){
    return this.http.post(this.apiurl + '/Answer/Vote', data);
  }
  VoteAnswerByQuestioner(data: AnswerFpkDto){
    return this.http.post(this.apiurl + '/Answer/Confirm', data);
  }
  
  
}
