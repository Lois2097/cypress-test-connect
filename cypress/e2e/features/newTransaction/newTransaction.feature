Feature: New Transaction Module

  Background:
    Given I visit the FMS page
    Given I login as "33333"

  @assertFields
  Scenario Outline: Assert fields and buttons in <transaction> Accounts page
    Given I am on "Markets Sales" page
    When I click New Transaction in the sidebar
    Then I click "<transaction>" transaction
    Then I select "<product>" product
    Then I check the state of the "SEND" button
      | assertion |             |      |
      | exist     |             |      |
      | have.attr | aria-hidden | true |
    Then I check the state of the "UPLOAD" button
      | assertion   |
      | exist       |
      | be.disabled |
    Then the "Mose Ref No" should be disabled
      | assertion   |
      | exist       |
      | be.disabled |
    Then the "Client Name" should be disabled
      | assertion   |
      | exist       |
      | be.disabled |
    Then the "Branch Code" should be disabled
      | assertion   |
      | exist       |
      | be.disabled |
    Then the "Branch Mnemonic" should be disabled
      | assertion   |
      | exist       |
      | be.disabled |
    Then the "Threshold" should be disabled
      | assertion   |
      | exist       |
      | be.disabled |
    Then I select Value Date
    Then I input the "<mnemonic>" mnemonic and press enter
    Then I want "<approvers>" as my approvers
    Then I upload the Documents for the "<mnemonic>" mnemonic
    And Input "DAT test remarks" as remarks
    Then I check the state of the "CLEAR" button
      | assertion  |
      | exist      |
      | be.visible |
    And I click the clear button
    Then all form fields should be empty
      | assertion |
      | exist     |
      | be.empty  |
    And all select options are empty
      | assertion |               |       |
      | have.attr | aria-required | false |

    Examples:
      | transaction | product | mnemonic | approvers | dealers |
      | Corporate   | ASWAP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | COCDS   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | CCHSD   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | DPPHP   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | DPTRD   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | FXOSO   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | PFXOP   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | FWDHD   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | FXOBO   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | EPFXT   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | EPFXB   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | FFXSW   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | FIREG   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | INTRS   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | LEINV   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | TDCTD   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | ONNDF   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | MBCLH   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | GBBSP   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | GPNSP   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | SPROD   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | TDPRT   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | UNSEC   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | UNTDL   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | UWCFF   | DEVBAUC7 | DARRYLL   | NONE    |
      # | Corporate   | UNWSP   | DEVBAUC7 | DARRYLL   | NONE    |

  @singleApprover
  Scenario Outline: Creation of New Transaction - <transaction> - Single Approver
    Given I am on "Markets Sales" page
    When I click New Transaction in the sidebar
    Then I click "<transaction>" transaction
    Then I select "<product>" product
    Then I select Value Date
    Then I input the "<mnemonic>" mnemonic and press enter
    Then I want "<approvers>" as my approvers
    Then I upload the Documents for the "<mnemonic>" mnemonic
    And Input "DAT test remarks" as remarks
    Then I click the Send Button
    Then I want to check the "Snackbar" if its successful
      | assertion    |          |
      | contain.text | Success! |
      | exist        |          |

    Examples:
      | transaction | product | mnemonic | approvers | dealers |
      | Corporate   | ASWAP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | COCDS   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | CCHSD   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | DPPHP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | DPTRD   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | FXOSO   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | PFXOP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | FWDHD   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | FXOBO   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | EPFXT   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | EPFXB   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | FFXSW   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | FIREG   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | INTRS   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | LEINV   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | TDCTD   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | ONNDF   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | MBCLH   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | GBBSP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | GPNSP   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | SPROD   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | TDPRT   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | UNSEC   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | UNTDL   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | UWCFF   | DEVBAUC7 | DARRYLL   | NONE    |
      | Corporate   | UNWSP   | DEVBAUC7 | DARRYLL   | NONE    |

  @singleApproverDealer
  Scenario Outline: Creation of New Transaction - <transaction> - Single Approver and Dealer
    Given I am on "Markets Sales" page
    When I click New Transaction in the sidebar
    Then I click "<transaction>" transaction
    Then I select "<product>" product
    Then I select Value Date
    Then I input the "<mnemonic>" mnemonic and press enter
    Then I want "<approvers>" as my approvers
    Then I want "<dealers>" as my dealers
    Then I upload the Documents for the "<mnemonic>" mnemonic
    And Input "DAT test remarks" as remarks
    Then I click the Send Button
    Then I want to check the "Snackbar" if its successful
      | assertion    |          |
      | contain.text | Success! |
      | exist        |          |

    Examples:
      | transaction | product | mnemonic | approvers | dealers |
      | Corporate   | ASWAP   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | COCDS   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | CCHSD   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | DPPHP   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | DPTRD   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | FXOSO   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | PFXOP   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | FWDHD   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | FXOBO   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | EPFXT   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | EPFXB   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | FFXSW   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | FIREG   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | INTRS   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | LEINV   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | TDCTD   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | ONNDF   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | MBCLH   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | GBBSP   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | GPNSP   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | SPROD   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | TDPRT   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | UNSEC   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | UNTDL   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | UWCFF   | DEVBAUC7 | DARRYLL   | ALLAN   |
      | Corporate   | UNWSP   | DEVBAUC7 | DARRYLL   | ALLAN   |

  @approverRule
  Scenario Outline: Creation of New Transaction - <transaction> - With Approve Rule
    Given I am on "Markets Sales" page
    When I click New Transaction in the sidebar
    Then I click "<transaction>" transaction
    Then I select "<product>" product
    Then I select Value Date
    Then I input the "<mnemonic>" mnemonic and press enter
    Then I select "<approver rule>" as approver rule
    Then I click "<approvers>" as my approvers
    Then I upload the Documents for the "<mnemonic>" mnemonic
    Then I click the Send Button
    Then I want to check the "Snackbar" if its successful
      | assertion    |          |
      | contain.text | Success! |
      | exist        |          |

    Examples:
      | transaction | product | mnemonic | approver rule | approvers |
      | Corporate   | ASWAP   | DEVBAUC1 |        1A, 1B | ALL       |
      | Corporate   | COCDS   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | CCHSD   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | DPPHP   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | DPTRD   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | FXOSO   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | PFXOP   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | FWDHD   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | FXOBO   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | EPFXT   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | EPFXB   | DEVBAUC7 |            1A | DARRYLL   |
      | Corporate   | FFXSW   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | FIREG   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | INTRS   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | LEINV   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | TDCTD   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | ONNDF   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | MBCLH   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | GBBSP   | DEVBAUC7 |            1B | ALLAN     |
      | Corporate   | GPNSP   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | SPROD   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | TDPRT   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | UNSEC   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | UNTDL   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | UWCFF   | DEVBAUC7 |            1C | MIGS      |
      | Corporate   | UNWSP   | DEVBAUC7 |            1C | MIGS      |

  @multipleAproverDealer
  Scenario Outline: Creation of New Transaction - <transaction> - Muliple Approver and single dealer
    Given I am on "Markets Sales" page
    When I click New Transaction in the sidebar
    Then I click "<transaction>" transaction
    Then I select "<product>" product
    Then I select Value Date
    Then I input the "<mnemonic>" mnemonic and press enter
    Then I want "<approvers>" as my approvers
    Then I want "<dealers>" as my dealers
    Then I upload the Documents for the "<mnemonic>" mnemonic
    And Input "DAT test remarks" as remarks
    Then I click the Send Button
    Then I want to check the "Snackbar" if its successful
      | assertion    |          |
      | contain.text | Success! |
      | exist        |          |

    Examples:
      | transaction | product | mnemonic | approvers | dealers |
      | Corporate   | ASWAP   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | COCDS   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | CCHSD   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | DPPHP   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | DPTRD   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | FXOSO   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | PFXOP   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | FWDHD   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | FXOBO   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | EPFXT   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | EPFXB   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | FFXSW   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | FIREG   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | INTRS   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | LEINV   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | TDCTD   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | ONNDF   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | MBCLH   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | GBBSP   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | GPNSP   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | SPROD   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | TDPRT   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | UNSEC   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | UNTDL   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | UWCFF   | DEVBAUC7 | ALL       | DARRYLL |
      | Corporate   | UNWSP   | DEVBAUC7 | ALL       | DARRYLL |
