Feature: Testing

  Scenario: Simple scenario for testing
    Given step of simple scenario 1
    Then step of simple scenario 2
    And step of simple scenario 3

  Scenario Outline: Simple scenario outline for testing <scenario>
    Given step of simple scenario outline <scenario> - 1
    Then step of simple scenario outline <scenario> - 2
    And step of simple scenario outline <scenario> - 3

    Examples:
      | scenario |
      | a        |
      | b        |
