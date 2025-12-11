import { HelpCircle, Lock } from "lucide-react";
import { SecurityQuestionType } from "../../types";
import { useAdminPermission } from "@/lib/hooks/useAdminPermission";

const SecurityQuestionCard = ({
  question,
  index,
}: {
  question: SecurityQuestionType;
  index: number;
}) => {
  const { hasPermission } = useAdminPermission();
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5 text-blue-500 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Question {index + 1}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {question?.question}
          </p>
          <div className="flex items-center gap-2">
            {hasPermission ? (
              <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                {question?.answer}
              </span>
            ) : (
              <>
                <Lock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                  Answer hidden for security. Contact admin.
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityQuestionCard;
