
from input import product_id_inputs


def sumAllInvalidIds(product_ids: str):
    sum_of_invalid_ids = 0

    for id_range in product_ids.split(","):
        [first_id, second_id] = id_range.split("-")

        print(first_id, second_id)

        for id in range(int(first_id), int(second_id)):
            id_str = str(id)
            first_half, second_half = id_str[:len(
                id_str)//2], id_str[len(id_str)//2:]

            if (id_str[0] == "0" or first_half == second_half):
                print(f"Found false ID: {id}")
                sum_of_invalid_ids += id

    print("Sum of invalid IDs: ", sum_of_invalid_ids)


sumAllInvalidIds(product_id_inputs)
