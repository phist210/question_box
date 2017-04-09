# file for calculating scores
from .models import *


def count_results(total_votes):
    up = 0
    down = 0
    print([v for v in total_votes])
    for v in total_votes:
        if v == 1:
            up += 1
        elif v == -1:
            down += 1
        else:
            raise ValueError("ERROR")
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
    all_scores = [ans.score for ans in AnswerVote.objects.filter(answer=answer_id)]
    ans_score_pairs = zip(all_ans, all_scores)
    results = count_results(all_scores)
    score_num = score(results[0], results[1])
    return score_num
