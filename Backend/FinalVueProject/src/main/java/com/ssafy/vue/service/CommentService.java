package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.CommentDto;

public interface CommentService {
	List<CommentDto> selectComment(int qnano) throws Exception;
	CommentDto selectCommentById(int commentid) throws Exception;
	boolean insertComment(CommentDto commentDto) throws Exception;
	boolean updateComment(CommentDto commentDto) throws Exception;
	boolean deleteComment(int commentid) throws Exception;
}
