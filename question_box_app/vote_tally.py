# file for calculating scores
from .models import *

def count_results(total_votes_list):
    up = 0
    down = 0
    for vote in total_votes_list:
        if vote == 1:
            up += 1
        elif vote == -1:
            down += 1
        else:
            raise ValueError

    return (up, down)


def score(upvotes, downvotes):
    return upvotes - downvotes


def q_vote_total(question_id):
    q_vote_total = [q.score for q in QuestionVote.objects.filter(question=question_id)]
    results = count_results(q_vote_total)
    score_num = score(results[0], results[1])
    return score_num


def ans_vote_total(question_id, answer_id):
    all_ans = [ans for ans in Answer.objects.filter(question=question_id)]
    ans_vote_total = [ans.score for ans in all_ans if ans.question.id == question_id]
    results = count_results(ans_vote_total)
    score_num = score(results[0], results[1])
    return score_num
