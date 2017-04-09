# file for calculating scores


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
